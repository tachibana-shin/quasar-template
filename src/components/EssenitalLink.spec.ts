import { render } from "@testing-library/vue"

import EssentialLinkVue from "./EssentialLink.vue"

describe("EssenitalLink", () => {
  test("match snapshot", () => {
    const { baseElement } = render(EssentialLinkVue, {
      props: {
        title: "Hello World",
      },
    })

    expect(baseElement).toMatchSnapshot()
  })
})
