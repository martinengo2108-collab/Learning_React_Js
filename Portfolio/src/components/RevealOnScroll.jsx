import { useEffect } from "react"


const RevealOnScroll = (children) => {

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting){
                ref.current.classList.add("visible");
            }

        })
    })
    return (
        <div
            ref={ref} className="reveal">
            {children}
        </div>
    )

}