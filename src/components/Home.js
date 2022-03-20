export default function Home(props) {
    return (
        <div className='flex flex-col justify-center items-center h-screen relative '>
            <h1 className='text-blue font-semibold text-3xl m-2'>Quizzical</h1>
            <h3 className="text-blue text-xl m-1">Some description if needed</h3>
            <button
                className=' bg-blue px-20 py-3 mt-6 text-center text-white rounded-xl font-medium'
                onClick={props.startQuiz}
            >
                Start quiz
            </button>
            
        </div>
    )
}