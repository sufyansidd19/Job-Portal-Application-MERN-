import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Graphic Designer",
    "Data Science",
    "Machine Learning Enginner",
    "Full Stack Developer",
    "DevOps Engineer",
    "Flutter Developer"
]
const CategoryCarousel = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button variant="outline" className="rounded-full bg-black text-white">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel