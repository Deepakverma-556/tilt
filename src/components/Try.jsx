import React from 'react'
import { Tilt } from 'react-tilt'

const Try = () => {
    const defaultOptions = {
        reverse: false,  
        max: 35,     
        perspective: 1000,   
        scale: 1,    
        speed: 1000,   
        transition: true,   
        axis: null,   
        reset: true,    
        easing: "cubic-bezier(.20,.10,.10,.10)",  
    }
    return (
        <div className='flex overflow-hidden min-h-screen items-center justify-center gap-6 flex-wrap py-10'>

            <Tilt options={defaultOptions} >
                <div className='h-[300px] w-[300px] bg-gradient-to-br from-red-700 to-blue-700 text-white flex items-center justify-center text-4xl rounded-xl cursor-pointer '>HOVER ME</div>
                <p className='text-center text-xl font-semibold'>Default</p>
            </Tilt>
            <Tilt options={{
                max: 40,
                scale: 1,
                axis: 'y',
                transition:true,

            }}>
                <img data-tilt data-tilt-max='500' src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="nature" className='h-[300px] w-[300px] rounded-lg cursor-pointer' />
                <p className='text-center text-xl font-semibold'>X axis disable</p>
            </Tilt>
            <Tilt options={{
                max: 40,
                scale: 1,
                axis: 'x',
                transition:true,

            }}>
                <img data-tilt data-tilt-max='500' src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg" alt="nature" className='h-[300px] w-[300px] rounded-lg cursor-pointer' />
                <p className='text-center text-xl font-semibold'>Y axis disable</p>
            </Tilt>

        </div>
    )
}

export default Try