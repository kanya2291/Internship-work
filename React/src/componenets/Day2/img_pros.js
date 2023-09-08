import Task2 from './Task2';
function Img_props() {
    const imgs = [
        {
            id: 0,
            name: 'paris',
            srce: './assets/paris.jpg',
        },
        {
            id: 1,
            name: 'malaysia',
            srce: './assets/malasiya.jpg',
        },
        {
            id: 2,
            name: 'indonesia',
            srce: './assets/indonesia.jpg',
        },
        {
            id: 3,
            name: 'bangkok',
            srce: './assets/bangkok.jpg',
        },
    ];
    return (
        <div className='d-flex justify-content-evenly '>
            {
                imgs.map((u) => {
                    return <Task2 key={u.id} src={u.srce} name={u.name}></Task2>
                })
            }
        </div>
    )
}
export default Img_props;