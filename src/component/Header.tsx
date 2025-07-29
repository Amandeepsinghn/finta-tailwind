import { Button } from "./button"

export const Dash = () => {
    return (
        <div className="flex flex-wrap justify-between p-4 shadow-sm items-center ">
            <div className="text-indigo-600 text-2xl font-bold">
                Defuse
            </div>
            <div className="flex justify-center space-x-4">
                <button className="text-indigo-700 font cursor-pointer hover:text-indigo-700">
                    Log in
                </button>
                <Button text="Sign Up" color="bg-indigo-600" size="m"/>
            </div>
        </div>
    )
}