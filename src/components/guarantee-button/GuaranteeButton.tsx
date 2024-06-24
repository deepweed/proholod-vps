"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const GuaranteeButton = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [model, setModel] = useState('');
    const [date, setDate] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string; model?: string; date?: string; contact?: string; }>({});
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);
    const [warningMessage, setWarningMessage] = useState('');

    useEffect(() => {
        const savedLastSubmitTime = localStorage.getItem('lastSubmitTime');
        if (savedLastSubmitTime) {
            setLastSubmitTime(parseInt(savedLastSubmitTime, 10));
        }
    }, []);

    const handleFormSubmit = async () => {
        setErrors({});
        setMessage('');
        setWarningMessage('');

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const currentTime = Date.now();
        if (lastSubmitTime && (currentTime - lastSubmitTime < 300000)) {
            setWarningMessage('Мы уже получили одну вашу заявку на гарантийное обслуживание. Ожидайте, мы скоро свяжемся с Вами для уточнения всех деталей.');
            return;
        }

        const formData = {
            name: name,
            phone: phone,
            model: model,
            date: date,
            contact: contact,
        };

        try {
            const response = await fetch('/api/guarantee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Заявка на гарантийное обслуживание успешно отправлена. Ожидайте, мы скоро свяжемся с Вами.');
                setName('');
                setPhone('');
                setModel('')
                setDate('');
              } else {
                const errorData = await response.json();
                setMessage(`Ошибка при отправке заявки: ${errorData.error}`);
              }

            if (!response.ok) {
                throw new Error('Failed to send data');
            }
            setLastSubmitTime(currentTime);
            localStorage.setItem('lastSubmitTime', currentTime.toString());

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const validateForm = () => {
        const errors: { name?: string; phone?: string; model?: string; date?: string; contact?: string; } = {};

        if (!name) {
            errors.name = 'Имя обязательно для заполнения';
        }

        if (!model || model.length < 5) {
            errors.model = 'Корректно заполните наименование модели';
        }

        const phoneRegex = /^\d{11}$/;
        if (!phone) {
            errors.phone = 'Телефон обязателен для заполнения';
        } else if (!phoneRegex.test(phone)) {
            errors.phone = 'Телефон должен состоять из 11 цифр';
        }

        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/;

        if(!date) {
            errors.date = "Укажите дату проведения работ"
        } else if(!dateRegex.test(date)) {
            errors.date = 'Введите реальную дату в формате дд.мм.гг';
        }

        if(!contact) {
            errors.contact = "Выберите один из трех вариантов"
        }

        return errors;
    };

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button className="mb-5 w-full h-[50px] md:w-[400px]" variant="blue">
                    Создать заявку на гарантийное обслуживание
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Заявка на гарантийное обслуживание</DialogTitle>
                    <DialogDescription>
                        <div className="block w-full mb-4">
                            <p className="mb-4 mt-2">
                                Пожалуйста, заполните форму ниже, чтобы запросить гарантийное обслуживание. Перед отправкой заявки, пожалуйста, ознакомьтесь с условиями гарантийного обслуживания.
                                <br /><br />
                                Модель кондеционера или холодильного оборудование, дату проведения работ Вы можете узнать на гарантийном талоне.
                            </p>
                            <Input
                                className="mb-2"
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                            <Input
                                className="mb-2"
                                type="text"
                                placeholder="Номер телефона для связи"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}
                            <Input
                                className="mb-2"
                                type="text"
                                placeholder="Модель сплит-системы, холодильного оборудования"
                                value={model}
                                onChange={e => setModel(e.target.value)}
                            />
                            {errors.model && <p className="text-red-500 mb-2">{errors.model}</p>}
                            <Input
                                className="mb-2"
                                type="text"
                                placeholder="Дата проведения работ"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                            {errors.date && <p className="text-red-500 mb-2">{errors.date}</p>}
                            <Select onValueChange={(value) => setContact(value)}>
                                <SelectTrigger className="mb-2">
                                    <SelectValue placeholder="К номеру привязан WhatsApp / Telegram?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="telegram">Telegram</SelectItem>
                                        <SelectItem value="Есть WhatsApp и Telegram">И то, и другое</SelectItem>
                                        <SelectItem value="Нет ни WhatsApp, ни Telegram">Ни то, и ни другое</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.contact && <p className="text-red-500 mb-2">{errors.contact}</p>}
                        </div>
                        <Button variant="blue" onClick={handleFormSubmit}>
                            Отправить
                        </Button>
                        {warningMessage && <p className="text-red-500 mt-4">{warningMessage}</p>}
                        {message && <p className="mt-4 text-green-600">{message}</p>}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default GuaranteeButton;
