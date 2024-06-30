"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SecondService = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [model, setModel] = useState('');
    const [date, setDate] = useState('');
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

        const formData = {
            title: "второе_гарантийное_обслуживание",
            name: name,
            phone: phone,
            model: model,
            date: date,
            contact: contact,
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
                errors.contact = "Выберите один из четырех вариантов"
            }

            return errors;
        };

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

        try {
            const response = await fetch('/api/guarantee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Мы получили Вашу заявку. Ожидайте, мы скоро свяжемся с Вами.');
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
    }

    return (
        <>
            <h1 className="text-xl font-bold mb-10">Второе гарантийное обслуживание</h1>
            <div className="block lg:flex">
                <div className="w-full block lg:w-1/2">
                    <p className="mb-4 w-full lg:w-[530px]">
                        Пожалуйста, заполните форму ниже, чтобы запросить второе гарантийное обслуживание. Перед отправкой заявки, пожалуйста, ознакомьтесь с условиями гарантийного обслуживания.
                        <br /><br />
                        Модель кондеционера или холодильного оборудование, дату проведения работ Вы можете узнать на гарантийном талоне.
                    </p>
                    <Input className="mb-2 w-full lg:w-[500px]" type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)}/>
                    {errors.name && <p className="text-red-500 mb-2">{errors.name}</p>}
                    <Input className="mb-2 w-full lg:w-[500px]" type="text" placeholder="Номер телефона" value={phone} onChange={e => setPhone(e.target.value)}/>
                    {errors.phone && <p className="text-red-500 mb-2">{errors.phone}</p>}
                    <Input className="mb-2 w-full lg:w-[500px]" type="text" placeholder="Модель сплит-системы, холодильного оборудования" value={model} onChange={e => setModel(e.target.value)}/>
                    {errors.model && <p className="text-red-500 mb-2">{errors.model}</p>}
                    <Input className="mb-2 w-full lg:w-[500px]" type="text" placeholder="Дата проведения установочных работ дд.мм.гг" value={date} onChange={e => setDate(e.target.value)}/>
                    {errors.date && <p className="text-red-500 mb-2">{errors.date}</p>}
                    <Select onValueChange={(value) => setContact(value)}>
                        <SelectTrigger className="mb-2 w-full lg:w-[500px] text-gray-500">
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
                    <Button className="w-full mb-5 lg:w-[500px] h-[45px]" variant="blue" onClick={handleFormSubmit}>
                        Запросить первое гарантийное обслуживание
                    </Button>
                    {warningMessage && <p className="text-red-500 mt-4">{warningMessage}</p>}
                    {message && <p className="mt-4 text-green-600 text-sm w-full lg:w-[500px] font-medium">{message}</p>}
                </div>
                <div>
                    <h2 className="text-sm font-bold mb-4">Что из себя представляет второе гарантийное обслуживание?</h2>
                    <p className="text-gray-600 text-sm w-full lg:w-[500px] font-medium">
                        Это комплекс мер, направленных на обеспечение надежности и герметичности сплит-систем или холодильных установок. Оно включает в себя следующие меры:<br /><br />
                        Проверка надежности крепления внутреннего и наружного блока, а также иных конструкций, используемых при монтаже сплит-систем и 
                        холодильных установок, чтобы обеспечить устойчивость и долговечность всей системы.<br /><br />
                        Проверка надежности подключения межблочной кабельной магистрали, удлинение штатного кабеля питания, электрического вводного кабеля.<br /><br />
                        Проверка качества вальцовочного, резьбового и спаенного соединения межблочных трубок и герметичность фреонового контура между точками подключения к блокам сплит-системы и холодильных установок.<br /><br />
                        Проверка герметичности дренажного соединения и оптимального отвода конденсата.<br /><br />
                        Помните, что <span className="text-blue-600">отказ от своевременного проведения годового технического обслуживания</span> прекращает все гарантийные обязательства.
                    </p>
                </div>
            </div>
        </>
    );
}

export default SecondService;