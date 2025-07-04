import { Button } from "@/components/ui/button";
import{
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from  "lucide-react"; //downloaded while installig shadcn
import Link from "next/link";
// import Image from "next/image";

const features=[
  {
    name:"Store your PDF Documents",
    description: "Keep all your important document files securely stored and easily accessible anytime, anywhere.",
    icon:GlobeIcon
  },
  {
    name:"Blazing Fast Responses",
    description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon:ZapIcon
  },
  {
    name:"Chart Memorisation",
    description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon:BrainCogIcon
  },
  {
    name:"Interactive PDF Viewer",
    description: "Engage with your PDF like never before using our intuitive and interactive viewer.",
    icon:EyeIcon
  },
  {
    name:"Cloud Backup",
    description: "Rest assured your documents are safely backed upon the cloud, protected from loss or damage.",
    icon:ServerCogIcon
  },
  {
    name:"Responsive Across Devices",
    description: "Access and chat with your PDFs seamlessly on an device, whether it's your desktop, tablet or smartphone.",
    icon:MonitorSmartphoneIcon
  },
  
]

export default function Home() {
  return (
    
      <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
        <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
          <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
                  {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Interactive Document Companion</h2> */}
                  <h2 className="text-3xl ">Introducing <span className="font-semibold leading-7 text-indigo-600"> DocuTalk</span></h2>

                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-6xl">Transform Your PDFs into Interactive Conversations</p>

                  <p>
                    <span className="text-1xl"> Your Interactive Document Companion</span>
                    <br />
                    <br />Upload your document, and our chatbot will summarize content, and answer all your Qs. Ideal for everyone, <span className="text-indigo-600">DocuTalk</span>{""} turns static documents into {""} <span className="font-bold">dynamic conversations</span>, enhancing productivity 10x fold effortlessly. 

                  </p>

                  <Button asChild className="mt-10">
                    <Link href='/dashboard'>Get Started</Link>
                  </Button>

                  <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* <Image 
                    alt="App Screenshot"
                    src="https://i.imgur.com/VciRSTI.jpeg" //in next.config.tx gave permission to optimize image from imgur 
                    width={2432}
                    height={1442}
                    className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 "
                    /> */}

                    <div aria-hidden="true" className="relative">
                      <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"></div>
                    </div>                  
                    </div>
                  </div>

                  <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:grid-y-16">                   
                          {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">  {/*Add key here */}
                              <dt className="inline font-semibold text-gray-900">
                                <feature.icon 
                                aria-hidden="true"
                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                />
                              </dt>
                              <dd>{feature.description}</dd>
                            </div>
                          ))}
                    </dl>
                  </div>
            </div>
          </div>
        </div>
      </main>
      
  
  );
}
