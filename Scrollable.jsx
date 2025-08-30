import {useState,useEffect,useRef} from 'react'


const ScrollableList = () => {
    const listRef = useRef()
    const [item,setItemList] = useState(Array.from({length:20},(_,i) => i+1))
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const target = entries[0]
        console.log('print entries', entries)
        if(target.isIntersecting){
            console.log('We are at the end of the page')
            loadmore()
        }
      },{
        root: null,
        threshold: 1.0,
      })
      if (listRef.current) {
      observer.observe(listRef.current);
        }
        return () => {
        observer.disconnect(); // cleanup on unmount
        }
    },[])
    const loadmore = () => {
        setItemList((previtems) => ([...previtems,...Array.from({length:5},(_,i)=> previtems.length+i+1)]))
    }
    return (
        <div>
            {item.map(data => <li style={{margin:"50px",padding:"50px",background:"blue"}}>{data}</li>)}
            <li ref={listRef}>loading more.........</li>
        </div>
    )
}

export default ScrollableList
