import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test("挨拶が正常にレンダリングされる",()=>{
    render(<Greet />)
    const testElement = screen.getByText(/hello/i)
    expect(testElement).toBeInTheDocument()
})
