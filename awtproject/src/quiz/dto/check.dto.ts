import { IsNotEmpty } from "class-validator";

export class check {
    @IsNotEmpty({message:"Please enter a "})
    id: string;
}
