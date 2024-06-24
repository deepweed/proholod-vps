"use client"

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ProductButtonProps {
    title: string;
}

const ProductButton = ({ title }: ProductButtonProps) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);
    const [message, setMessage] = useState<string>('');
    const [warningMessage, setWarningMessage] = useState('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string; }>({});

    useEffect(() => {
        const savedLastSubmitTime = localStorage.getItem('lastSubmitTime');
        if (savedLastSubmitTime) {
            setLastSubmitTime(parseInt(savedLastSubmitTime, 10));
        }
    }, []);

    const handleFormSubmit = async () => {
        setMessage('');

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

        const formData = {
            name: name,
            phone: phone,
            product: title, // Передаем название товара из пропсов
            pagelink: window.location.href, // Получаем ссылку на текущую страницу
        };

        try {
            const response = await fetch('/api/product-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Мы получили Вашу заявку и скоро свяжемся с Вами. Ожидайте звонка.');
                setName('');
                setPhone('');
              } else {
                const errorData = await response.json();
                setMessage(`Ошибка при отправке заявки: ${errorData.error}`);
              }
            setLastSubmitTime(currentTime);
            localStorage.setItem('lastSubmitTime', currentTime.toString());

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const validateForm = () => {
        const errors: { name?: string; phone?: string; model?: string } = {};

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

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                <Button className="mb-5 w-full h-[50px] md:w-[200px]" variant="blue">Уточнить наличие</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Уточнить наличие</DialogTitle>
                    <DialogDescription>
                        <p className="mt-3 mb-3">{title}</p>
                        <div className="block mt-4 lg:flex lg:justify-between">
                            <Input className="mr-4 mb-2" type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)} />
                            <Input type="text" placeholder="Номер телефона" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                        {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                        {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}
                        <Button variant={"blue"} onClick={handleFormSubmit}>Отправить</Button>
                        {warningMessage && <p className="text-red-500 mt-4">{warningMessage}</p>}
                        {message && <p className="mt-4 text-green-600">{message}</p>}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ProductButton;
