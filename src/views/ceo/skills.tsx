import Image from "next/image";

const Skills = () => {
  return (
    <div className="lg:mt-40 mt-20">
      <div className="max-w-[1770px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:flex gap-4 lg:flex-wrap justify-center">
          <div
            className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full"
            //   style={{
            //     borderWidth: "3px", // Set the border width
            //     borderStyle: "solid", // Ensure solid border style
            //     borderImageSource:
            //       "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)", // // Simpler gradient
            //     borderImageSlice: 1, // Apply the gradient to the border
            //     borderImageRepeat: "stretch", // Stretch the gradient across the border
            //   }}
          >
            <Image
              src={"/ceo/figma.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Figma</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/wordpress.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Wordpress</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/elementor.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Elementor</p>
          </div>
          <div
            className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full"
            //   style={{
            //     borderWidth: "3px", // Set the border width
            //     borderStyle: "solid", // Ensure solid border style
            //     borderImageSource:
            //       "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)", // // Simpler gradient
            //     borderImageSlice: 1, // Apply the gradient to the border
            //     borderImageRepeat: "stretch", // Stretch the gradient across the border
            //   }}
          >
            <Image
              src={"/ceo/vscode.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>VS Code</p>
          </div>
          <div
            className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full"
            //   style={{
            //     borderWidth: "3px", // Set the border width
            //     borderStyle: "solid", // Ensure solid border style
            //     borderImageSource:
            //       "linear-gradient(90deg, #075B65 0%, #00838A 37.02%, #328A99 81.25%)", // // Simpler gradient
            //     borderImageSlice: 1, // Apply the gradient to the border
            //     borderImageRepeat: "stretch", // Stretch the gradient across the border
            //   }}
          >
            <Image
              src={"/ceo/visual-studio.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Visual Studio</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/photoshop.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Photoshop</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/xd.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Adobe XD</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/adobe-ai.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Adobe Ai</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/shopify.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Shopify</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/webflow.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Web Flow</p>
          </div>
          <div className="px-9 py-3 flex gap-3 items-center border-[#075B65] border-2 rounded-full">
            <Image
              src={"/ceo/laravel.svg"}
              className="w-[30px] h-[30px]"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
