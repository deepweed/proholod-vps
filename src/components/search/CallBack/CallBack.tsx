import { useState, FormEvent, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallBack: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [warningMessage, setWarningMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  useEffect(() => {
    const savedLastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (savedLastSubmitTime) {
        setLastSubmitTime(parseInt(savedLastSubmitTime, 10));
    }
}, []);

  const validateForm = () => {
    const errors: { name?: string; phone?: string } = {};

    if (!name) {
      errors.name = 'Имя обязательно для заполнения';
    }

    const phoneRegex = /^\d{11}$/;
    if (!phone) {
      errors.phone = 'Телефон обязателен для заполнения';
    } else if (!phoneRegex.test(phone)) {
      errors.phone = 'Телефон должен состоять из 11 цифр';
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    setErrors({});
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setWarningMessage('');
    const currentTime = Date.now();
    if (lastSubmitTime && (currentTime - lastSubmitTime < 300000)) {
        setWarningMessage('Мы уже получили одну вашу заявку и скоро свяжемся с Вами.');
        return;
    }

    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (res.ok) {
        setMessage('Отлично! Мы получили Вашу заявку, ожидайте звонка в блисжайшее время.');
        setName('');
        setPhone('');
      } else {
        const errorData = await res.json();
        setMessage(`Ошибка при отправке заявки: ${errorData.error}`);
      }

      setLastSubmitTime(currentTime);
      localStorage.setItem('lastSubmitTime', currentTime.toString());

    } catch (error) {
      setMessage('Ошибка при отправке заявки.');
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}>Обратный звонок</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Обратный звонок</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit}>
              <div className="block mb-4 mt-4 lg:flex lg:justify-between">
                <div className="mb-2">
                  <Input
                    className="mr-4"
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>
              </div>
              <Button variant={"blue"} type="submit">Отправить</Button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
            {warningMessage && <p className="text-red-500 mt-4">{warningMessage}</p>}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CallBack;
