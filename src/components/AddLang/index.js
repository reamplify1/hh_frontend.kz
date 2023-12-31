import { useState } from "react"

export default function AddLang ({ onChange}) {
    const [foreignLanguages, setForeignLanguages] = useState([]) 
    const remove = (index) => {
        const langs = [...foreignLanguages];
        langs.splice(index, 1)
        setForeignLanguages(langs)
    }
    const onSelect = (e) => {
        const [index, key] = e.target.name.split('-')
        const langs = [...foreignLanguages]
        langs[index][key] = e.target.value
        setForeignLanguages(langs)

        onChange(langs)
    }

    const lns = foreignLanguages.map((ln, index) => (
            <div className="lns fieldset-md selectdate selectdate-noday" key={index}>
                <span className="remove" onClick={() => remove(index)}>X</span>
                <select placeholder="Язык" className="input" name={index + "-name"} value={foreignLanguages[index].name} onChange={onSelect}>
                    <option value="Казахский">Казахский</option>
                    <option value="Русский">Русский</option>
                    <option value="Английский">Английский</option>


                </select>
                <select placeholder="Уровень" className="input" name={index + "-level"} value={foreignLanguages[index].level} onChange={onSelect}>
                    <option value="A1">A1 - начальный</option>
                    <option value="A2">A2 - элементарный</option>
                    <option value="B1">B1 - средний</option>
                    <option value="B2">B2 - средне-продвинутый</option>
                    <option value="C1">C1 - продвинутый</option>
                    <option value="C2">C2 - в совершенстве</option>


                </select>
            </div>
        ))

    return (
        <div className="eds">
            {lns}
            <a onClick={() => setForeignLanguages([...foreignLanguages, {name: '', level: ''}])}>Добавить язык</a>
        </div>
    )
}