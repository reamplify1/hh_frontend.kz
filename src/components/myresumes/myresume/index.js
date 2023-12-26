export default function MyResume ({item}) {
    
    return (
        <div className="card mtb4">
            <a className="h3">{item.position}</a>
            <p>Создан {item.createdAt}</p>

            <h3>Статистика</h3>
            <div className="flex ">
                {/* <a className="p3">{item.stats.show}</a>
                <a className="p3">{item.stats.views}</a>
                <a className="p3">{item.stats.applies}</a> */}
                <a  className="p3" href="">0 показов</a>
                <a className="p3" href="">0 просмотров</a>
                <a className="p3" href="">0 приглашений</a>
            </div>


        </div>
    )
}