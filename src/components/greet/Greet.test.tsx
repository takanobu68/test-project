import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet',()=>{
    
    test("renders correctly",()=>{
        render(<Greet />)
        const testElement = screen.getByText(/hello/i)
        expect(testElement).toBeInTheDocument()
    })
    
    test('renders with a name', () =>{
        render(<Greet name="ShinCode"/>)
        const textElement = screen.getByText("Hello ShinCode")
        expect(textElement).toBeInTheDocument()
    })
        
})

