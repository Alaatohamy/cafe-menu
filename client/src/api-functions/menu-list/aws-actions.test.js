import { encode, getImgAWS } from "./aws-actions";
import { getItemData } from "./menu-list.actions";
import axios from "axios";

const mockAxios = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        count: 87
      })
  })
);

const mocData = [
  {
    name: "dog",
    type: "animal",
    price: 100,
    image: { name: "dog.png", src: "", file: {} }
  },
  {
    name: "cat",
    type: "animal",
    price: 80,
    image: { name: "cat.jpg", src: "", file: {} }
  },
  {
    name: "dove",
    type: "bird",
    price: 50,
    image: { name: "dove.png", src: "", file: {} }
  }
];

describe("Test getImgAWS api call", () => {
  // it("with existing data", () => {
  //   expect.assertions(1);
  //   return getImgAWS({ name: "", src: "", file: {} }, axios).then(res => {
  //     expect(res).toHaveProperty("src");
  //   });
  // });
});
