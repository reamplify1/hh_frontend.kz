'use client'
import Header from '../../components/header/index'
import Input from '@/components/input'
import {END_POINT} from '@/config/end-point';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AutoCompleteSelect from '@/components/AutoCompleteSelect'
import ModalAddExp from '@/components/ModalAddExp';
import SelectDate from '@/components/SelectDate';
import WorkingHistory from '@/components/WorkingHistory';
import AutoCompleteTags from '@/components/AutoCompleteTags';
import AddEducation from '@/components/AddEducation';
import AddLang from '@/components/AddLang';
import SelectEmploymentTypes from '@/components/SelectEmploymentTypes';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createResume } from '../store/slices/resumeSlice';
export default function CreateResume() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cities, setCities] = useState([])
    const [countries, setCountries] = useState([])
    const [allSkills, setSkills] = useState([])
    const [allEmploymentTypes, setEmploymentTypes] = useState([])
    const [workingHistories, setWorkingHistrories] = useState([])
    const [modalExpIsOpen, setModalExpIsOpen] = useState(false)
    const [first_name, setName] = useState('')
    const [last_name, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [cityId, setCity] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState('')
    const [citizenship ,setCitizenship] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState()
    const [salary_type, setSalaryType] = useState('KZT')
    const [skills, setSelectedSkills] = useState('')
    const [education, setEducation] = useState([])
    const [foreignLanguages, setForeignLanguages] = useState([])
    const [employmentTypes, setSelectedEmpTypes] = useState([])
    const [about, setAbout] = useState('')

    //component didMount
    useEffect (() => {
        console.log('didMount');
        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data)
        })
        axios.get(`${END_POINT}/api/region/countries`).then(res => {
            setCountries(res.data)
        })
        axios.get(`${END_POINT}/api/skills`).then(res => {
            setSkills(res.data)
        })
        axios.get(`${END_POINT}/api/employment-types`).then(res => {
            setEmploymentTypes(res.data)
        })
    }, [])




    // console.log('Trying to call close:', close);
    const closeModalExp = () => {
        setModalExpIsOpen(false)
    }

    const addWorkingHistory = (item) =>{
        setWorkingHistrories([...workingHistories, item])
        closeModalExp()
    }

    const removeWorkingHistory = (workingHistory) =>{
        let wh = [...workingHistories]
        let index = workingHistories.indexOf(workingHistory)
        wh.splice(index, 1);
        setWorkingHistrories(wh)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
        
    }
    const onSelect = () => {

    }
    const onSkillsChange = (data) => {
        const arr = data.map(item => item.name)
        setSelectedSkills(arr.join(','))
    }
    const handleSave = () =>{
        dispatch(createResume({
            first_name,
            last_name,
            phone,
            cityId,
            birthday,
            gender,
            position,
            about,
            salary,
            salary_type,
            citizenship,
            workingHistories,
            skills,
            education,
            employmentTypes, 
            main_language: "Казахский",

    
        }, router))

        console.log('onSave',{
            first_name,
            last_name,
            phone,
            cityId,
            birthday,
            gender,
            position,
            about,
            salary,
            salary_type,
            citizenship,
            workingHistories,
            skills,
            education,
            employmentTypes, 
            main_language: "Казахский",
    
        })
    }
    return (
        <main>
            <Header/>
            <div className='container p7' >
                <h1>Ваше резюме</h1>
                
                <h3>Контактные данные</h3>
                <Input placeholder="" type="text" label="Имя" size="fieldset-md" onChange={(e) => setName(e.target.value)}/>
                <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" onChange={(e) => setSurname(e.target.value)}/>
                <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" onChange={(e) => setPhone(e.target.value)}/>
                <AutoCompleteSelect placeholder="" type="text" label="Город проживания" size="fieldset-md" items={cities} onSelect={(data) => setCity(data.id)}/>
                


                <h3>Основная информация</h3>

                <SelectDate size='fieldset-sm' label="Дата рождения" onChange={(date) => setBirthday(date)}/>
                  


                <fieldset className={'fieldset fieldset-sm'}>
                    <label>Пол</label>
                    <div className='radio-group'>
                        <div className='radio' >
                            <input type='radio' onChange={handleGenderChange} name="gender" id='g1' value={'Мужской'}/>
                            <label htmlFor='g1'>Мужской</label>
                        </div>
                        <div className='radio'>
                            <input type='radio' onChange={handleGenderChange} name="gender" id='g2'value={'Женский'}/>
                            <label htmlFor='g2'>Женский</label>
                        </div>
                    </div>
                </fieldset>

                <AutoCompleteSelect placeholder="" type="text" label="Гражданство" size="fieldset-md" items={countries} onSelect={(data) => setCitizenship(data.id)}/>
                
                <h3>Специальность</h3>
                <Input placeholder="" type="text" label="Желаемая должность" size="fieldset-lg" onChange={(e) => setPosition(e.target.value)}/>
                
                <fieldset className={'fieldset fieldset-lg'}>
                    <label>Зарплата</label>
                    <div className='salary'>
                        <input className='input' placeholder="" type="number" value={salary} onChange={e=> setSalary(e.target.value * 1)}/>
                        <select className='input' value={salary_type} onChange={e=> setSalaryType(e.target.value)}>
                            <option value={'KZT'}>KZT</option>
                            <option value={'USD'}>USD</option>
                            <option value={'RUB'}>RUB</option>
                        </select>
                        на руки
                    </div>
                </fieldset>

                <h3>Опыт работы</h3>
                {modalExpIsOpen && <ModalAddExp close={closeModalExp} addWorkingHistory={addWorkingHistory}/>}
                <fieldset className={'fieldset fieldset-lg'}>
                    <label>Места работы</label>
                    <div className='exp'>
                        {workingHistories.map(item =>(<WorkingHistory workingHistory={item} remove={removeWorkingHistory}/>))}

                        <button className='button button-primary-bordered' onClick={() => setModalExpIsOpen(true)}>Добавить место работы</button>

                    </div>
                </fieldset>

                <fieldset className={'fieldset fieldset-lg'}>
                    <label>О себе</label>
                    <textarea className='textarea' value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Расскажите о себе"></textarea>
           
                </fieldset>                
                
                <AutoCompleteTags placeholder="" type="text" label="Ключевые навыки" size="fieldset-md" items={allSkills} onSelect={onSkillsChange}/>

                <h3>Образование</h3>
                <AddEducation onChange={(eds) => setEducation(eds)}/>

                <h3>Владение языками</h3>

                <AddLang onChange={(lns) => setForeignLanguages}/>

                <h3>Другая важная информация</h3>
                <SelectEmploymentTypes label="Занятость" size="fieldset-md" employmentTypes={allEmploymentTypes} onChange={(tps) => setSelectedEmpTypes(tps)}/>

                <button className='button button-primary' onClick={handleSave}>Сохранить и Опубликовать</button>
            </div>
        </main>
  )
}
