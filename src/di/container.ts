import {container} from "tsyringe";
import {MessageService} from "@/services/messageService";

container.registerSingleton(MessageService)

export default container