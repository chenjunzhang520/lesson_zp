import {
    Injectable
} from '@nestjs/common';
import { PostQueryDto } from './dto/post-query.dto'
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prismaService: PrismaService) {}

    async findAll(query) {
        const total = await this.prismaService.post.count();
        console.log(total,"---------")
        return {
            items: []
        }
    }
}