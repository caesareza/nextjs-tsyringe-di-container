import {useEffect} from "react";
import container from "@/di/container";
import {MessageService} from "@/services/messageService";

export default function Home() {
    useEffect(() => {
        const data = container.resolve(MessageService).getMessage('nisa')
        console.log('data', data)
    }, [])

    return (
        <div>
          <h1>Home</h1>
        </div>
      );
}