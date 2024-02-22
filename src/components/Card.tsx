"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import courseData from '../data/music_courses.json'
import { Button } from "./ui/moving-border";
import { cn } from "@/utils/cn";
import CustomButton from "./Button";
import { Boxes } from "./ui/background-boxes";

export function Card() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
            <div className="p-10 relative overflow-hidden">
                <div>
                <Boxes />
                    <div className="text-center">
                        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                    </div>
                </div>
                <div className="mt-10 mx-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient
                                    className="flex flex-col rounded-[22px] bg-white dark:bg-black  h-full max-w-sm">
                                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">

                                        <Image
                                            src={course.image}
                                            alt="jordans"
                                            width={400}
                                            height={300}
                                            className=" object-contain"
                                        />
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <Link href={`/courses/${course.slug}`} className="mt-3">
                                            <CustomButton text="Learn More" />
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <Link href={"/courses"}>

                        <Button
                            borderRadius="1.75rem"
                            className={cn("bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 ")}
                        >

                            View All courses
                        </Button>
                    </Link>

                </div>
            </div>
    );
}
