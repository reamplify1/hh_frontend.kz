import MyResume from "./myresume"
// export default function MyResumes (props) { 1v
    export default function MyResumes ({resumes}) {
    // const {resumes} = props 1v
    const showResumes = resumes.map(item => (<MyResume item={item} key={item.id}/>));
    return (<div>
            {showResumes}
        </div>
    )
}