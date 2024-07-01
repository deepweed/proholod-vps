"use client"

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "../ui/input";
import { useState, useEffect } from 'react';

interface ServiceProps {
    buttonTitle: string;
    dialogTitle: string;
    dialogDesc: string;
}

const ServiceButton = ( { buttonTitle, dialogTitle, dialogDesc }: ServiceProps ) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ name?: string; phone?: string; model?: string; date?: string; contact?: string; }>({});
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
            setWarningMessage('Мы уже получили одну из ваших заявок. Ожидайте, мы скоро свяжемся с Вами для уточнения всех деталей.');
            return;
        }

        const formData = {
            title: dialogTitle,
            name: name,
            phone: phone,
            contact: contact,
        };

        try {
            const response = await fetch('/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Мы успешно получили вашу заявку. Ожидайте, мы скоро свяжемся с Вами.');
                setName('');
                setPhone('');
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
        const errors: { name?: string; phone?: string; contact?: string; } = {};

        if (!name) {
            errors.name = 'Имя обязательно для заполнения';
        }

        const phoneRegex = /^\d{11}$/;
        if (!phone) {
            errors.phone = 'Телефон обязателен для заполнения';
        } else if (!phoneRegex.test(phone)) {
            errors.phone = 'Телефон должен состоять из 11 цифр';
        }

        if(!contact) {
            errors.contact = "Выберите один из четырех вариантов"
        }

        return errors;
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mb-5 w-full h-[50px] md:w-[400px]" variant="default">
                    {buttonTitle}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        {dialogDesc}
                        <Input
                            className="mb-2 mt-6"
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                        <Input
                            className="mb-2"
                            type="text"
                            placeholder="Ваше номер телефона"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}
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
}

export default ServiceButton;