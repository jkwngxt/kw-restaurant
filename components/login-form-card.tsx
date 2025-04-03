import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import SmallFooter from "@/components/footers/small-footer";

export function LoginFormCard() {
    return (
        <Card className="w-80 md:w-[360px] p-10 border-white bg-black/30 backdrop-blur-sm">
            <CardHeader className="p-0">
                <img
                    src="/images/logo-wide-white.png"
                    alt="Logo-white"
                    className="w-full max-w-[360px]"
                />
            </CardHeader>

            <CardContent className="p-0 flex flex-col gap-6 items-center justify-center">
                <form className="p-0 flex flex-col w-full items-center justify-center gap-6">
                        <Input
                            id="email"
                            placeholder="Email"
                            type="email"
                            className="w-full h-[42px] md:h-[46px] px-2.5 bg-white placeholder-gray-200 text-black"
                            required
                        />

                        <Input
                            id="password"
                            placeholder="Password"
                            type="password"
                            className="w-full h-[42px] md:h-[46px] px-2.5 bg-white placeholder-gray-400 text-black"
                            required
                        />


                    <Button  type="submit"
                             className=" cursor-pointer px-6 py-2
                                bg-white text-black font-bold text-base hover:bg-white">
                        Log in
                    </Button>
                </form>

                {/* Divider */}
                <div className="w-9/10 flex items-center gap-1">
                    <div className="flex-grow border-t border-white"></div>
                    <p className="text-center text-white px-2">or</p>
                    <div className="flex-grow border-t border-white"></div>
                </div>

                {/* Google Sign-in */}
                <img
                    src="/images/google-login/light/web_light_rd_ctn.svg"
                    alt="Continue with Google"
                    className="w-[70%] cursor-pointer"
                />

            </CardContent>
            <CardFooter className="flex justify-center p-0">
                <SmallFooter />
            </CardFooter>
        </Card>
    )
}
