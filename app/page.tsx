"use client";
import {
  FileImageFilled,
  FrownFilled,
  GiftFilled,
  LikeFilled,
  MailOutlined,
  PlusCircleFilled,
  SendOutlined,
} from "@ant-design/icons";
import {
  faAlignCenter,
  faChevronDown,
  faEllipsisH,
  faFaceSmile,
  faList,
  faLocationPin,
  faPaperPlane,
  faPen,
  faPencil,
  faPenToSquare,
  faPersonThroughWindow,
  faPlus,
  faRobot,
  faSearch,
  faStar,
  faUniversalAccess,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Menu, MenuProps } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";

const options = [
  { icon: faRobot, label: "copilot" },
  { icon: faStar, label: "Khám phá" },
  { icon: faUniversalAccess, label: "Đề cập" },
  { icon: faPenToSquare, label: "Các chuỗi chủ đề đã theo dõi" },
];

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Mục yêu thích",
    children: [
      { key: "1", label: "MÚP 1" },
      { key: "2", label: "MÚP 2" },
    ],
  },
  {
    key: "sub2",
    label: "Cuộc trò chuyện",
    children: [
      { key: "22", label: "MÚP 1" },
      { key: "23", label: "MÚP 2" },
      { key: "24", label: "MÚP 3" },
      { key: "25", label: "MÚP 4" },
      { key: "26", label: "MÚP 5" },
      { key: "27", label: "MÚP 6" },
      { key: "28", label: "MÚP 7" },
      { key: "29", label: "MÚP 8" },
      { key: "30", label: "MÚP 9" },
    ],
  },
];

export default function Home() {
  const [current, setCurrent] = useState<string>("1");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="w-full flex min-h-screen font-sans ">
      <div className="min-w-full flex flex-row">
        <div className="w-1/5 border-r pt-5 pb-5 border-neutral-600 bg-neutral-900 ">
          <div className="">
            <div className="pb-5 pr-3 pl-3 flex items-center justify-between mb-4 border-b border-black">
              <h3 className="text-xl font-semibold text-white">Trò chuyện</h3>
              <div className="flex gap-3 text-neutral-500">
                <FontAwesomeIcon icon={faEllipsisH} className="size-4" />
                <FontAwesomeIcon icon={faSearch} className="size-4" />
                <FontAwesomeIcon icon={faPenToSquare} className="size-4" />
                <FontAwesomeIcon icon={faChevronDown} className="size-4" />
              </div>
            </div>

            <div className="pb-5 pr-3 pl-3 flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center font-light text-gray-600">
                <div className="flex flex-row gap-2 text-gray-300">
                  <p className="text-xs border border-neutral-500 hover:border-neutral-500 p-1 rounded-xl">
                    {" "}
                    Chưa đọc{" "}
                  </p>
                  <p className="text-xs border border-neutral-500 hover:border-neutral-500 p-1 rounded-xl">
                    {" "}
                    Kênh{" "}
                  </p>
                  <p className="text-xs border border-neutral-500 hover:border-neutral-500 p-1 rounded-xl">
                    {" "}
                    Cuộc trò chuyện{" "}
                  </p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className="size-4" />
              </div>
            </div>
            <div className="flex flex-col  justify-center border-b border-t border-black p-2">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 items-center hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={option.icon}
                    className="text-gray-400 size-4"
                  />
                  <p className="text-md text-gray-400">{option.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-5">
            <Menu
              theme={"dark"}
              onClick={onClick}
              style={{ width: "100%" }}
              defaultOpenKeys={["sub1"]}
              selectedKeys={[current]}
              mode="inline"
              items={items}
              className="custom-menu"
            />
          </div>
        </div>

        <div className="w-4/5 p-5  bg-neutral-800">
          <div className="flex flex-row justify-between  border-b border-gray-300 pb-2">
            <div className="flex gap-1">
              <p className="w-10 h-10 border border-gray-400 rounded-full"></p>
              <div className="flex flex-row justify-center text-center items-center gap-2 pl-2">
                <p className="text-md font-bold text-white">MÚP CA</p>
                <FontAwesomeIcon
                  icon={faPen}
                  className="size-4! text-gray-400"
                />
                <div className="flex gap-3 pl-4">
                  <p className="text-white">Trò chuyện</p>
                  <p className="text-gray-400">Đã chia sẽ</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center text-gray-400">
              <FontAwesomeIcon
                icon={faAlignCenter}
                className="size-4! text-gray-400"
              />
              <p className=" font-semibold">Họp ngay bây giờ</p>
              <FontAwesomeIcon icon={faChevronDown} className="size-4" />
              <div className="flex flex-row gap-1 items-center p-1 hover:text-blue-400 cursor-pointer border-r border-gray-400 pr-3">
                <FontAwesomeIcon icon={faUserPlus} className="size-4" />
                <p className="font-semibold text-sm text-gray-300 ">7</p>
              </div>
              <FontAwesomeIcon icon={faSearch} className="size-4" />
              <FontAwesomeIcon
                icon={faPersonThroughWindow}
                className="size-4"
              />
              <FontAwesomeIcon icon={faEllipsisH} className="size-4" />
            </div>
          </div>
          <div
            className="w-full gap-2 pl-24 pr-24 justify-end flex flex-col"
            style={{ height: "82vh" }}
          >
            <div className="flex flex-row gap-2 text-sm text-gray-500 justify-start text-start items-center">
              <p className="min-w-10 min-h-10 border border-gray-400 rounded-full"></p>
              <div className="flex flex-col">
                <p>Song Toan</p>
                <p className="p-2 bg-neutral-700 text-white rounded-xl">
                  Error require() of ES Module
                  /Users/sstonn/Works/cnf-vpb-bos-api/node_modules/brace-expansion/index.js
                  from
                  /Users/sstonn/Works/cnf-vpb-bos-api/node_modules/fork-ts-checker-webpack-plugin/node_modules/minimatch/minimatch.js
                  not supported. Instead change the require of index.js in
                  /Users/sstonn/Works/cnf-vpb-bos-api/node_modules/fork-ts-checker-webpack-plugin/node_modules/minimatch/minimatch.js
                  to a dynamic import() which is available in all CommonJS
                  modules.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 text-sm text-gray-500 justify-start text-start items-center">
              <p className="w-10 h-10 border border-gray-400 rounded-full"></p>
              <div className="flex flex-col">
                <p>Mup Kien</p>
                <p className="p-2 bg-neutral-700 text-white rounded-xl">
                  Bao nuoc moi ng na
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 text-sm text-gray-500 justify-start text-start items-center">
              <p className="w-10 h-10 border border-gray-400 rounded-full"></p>
              <div className="flex flex-col">
                <p>Thao Dieu</p>
                <p className="p-2 bg-neutral-700 text-white rounded-xl">
                  oke anh
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500 justify-end text-end items-end">
              <p className="p-3 bg-neutral-700 text-white rounded-xl text-left">
                <img src="/icons/image.png" width={350} />
                clone teams 
              </p>
              <LikeFilled className="text-5xl" />
            </div>
          </div>
          <div className="flex flex-row gap-2 pl-24 pr-24 pt-5 text-sm text-gray-500 justify-end text-end items-center">
            <Input
              placeholder="Nhập tin nhắn"
              className="custom-search-input"
              suffix={
                <div className="cursor-pointer items-center justify-center flex ">
                  <div className="pr-2 flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPencil} className="size-5! text-gray-400" />
                    <FontAwesomeIcon icon={faFaceSmile} className="size-5! text-gray-400" />
                    <FontAwesomeIcon icon={faLocationPin} className="size-5! text-gray-400" />
                  </div>
                  <div className="pr-2 flex items-center justify-center gap-1">
                    <FontAwesomeIcon icon={faPlus} className="size-5! text-gray-400" />
                  </div>
                  <div className="border-l border-gray-400 pl-2 flex items-center justify-center">
                    <SendOutlined className="text-xl" style={{ color: "#99a1af" }} />
                  </div>
                </div>
              }
              style={{
                backgroundColor: "#2b2b2b",
                color: "white",
                borderRadius: "10px",
                border: "1px solid gray",
                padding: "8px 16px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
