import './SelectedPost.css';

let data = {
    "id": 1,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
    "text": "фыв",
    "date": "2021-10-06",
    "lesson_num": 123,
    "title": "фывфывфыв",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 7
  }

function SelectedPost() {

    return ( <>
        <div className='container'>
            <div className='container-title dark-title'>{data.title}</div>
            <img src={data.image} alt='photo' className='container-photo'/>
            <div className='container-desription'>{data.description}</div>
        </div>
    </> );
}

export default SelectedPost;