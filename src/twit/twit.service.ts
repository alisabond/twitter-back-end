import {PrismaClient, Twit} from "@prisma/client"
import {ICreateTwit} from "./twit.types";
import {logger} from "@/utils/log";

export class TwitService {
    private readonly prisma = new PrismaClient()

    async createTwit(twit: ICreateTwit): Promise<Twit> {
        try {
            return await this.prisma.twit.create({
                data: twit
            })
        } catch (e) {
            logger.error(e)
            throw new Error('Error creating twit')
        }

     }

     async getTwits(): Promise<Twit[]> {
        return this.prisma.twit.findMany()
     }
}
