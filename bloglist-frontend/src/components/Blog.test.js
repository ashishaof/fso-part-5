import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Blog from "./Blog"

describe("Blog tests", () => {

  let component

  beforeEach(() => {

    const mockHandler = jest.fn()
    const user = {
      username: "ashishaof",
      name: "charlie"
    }

    const testBlog = {
      title: "pela ono",
      author: "sonri",
      url: "www.indiatv.com",
      likes: 54,
      user: [{ username: "ashishaof", name: "charlie" }]
    }

    component = render(
      <Blog 
        blog={testBlog} 
        onClick={mockHandler} 
        user={user}
      />
    )
  })

  test("only name and author shown by default", () => {

    const basicInfo = component.container.querySelector('.basicInfo')
    const fullInfo = component.container.querySelector('.fullInfo')

    expect(basicInfo).toHaveTextContent('pela ono')
    expect(basicInfo).toHaveTextContent('sonri')
    expect(fullInfo).toHaveStyle('display: none')
  })

  test("when blogpost is clicked - all info is visible", () => {
    const basicInfo = component.container.querySelector('.basicInfo')
    const fullInfo = component.container.querySelector('.fullInfo')

    fireEvent.click(basicInfo)

    expect(basicInfo).toHaveTextContent("pela ono")
    expect(basicInfo).toHaveTextContent("sonri")

    expect(fullInfo).not.toHaveStyle("display: none")
  })
})
