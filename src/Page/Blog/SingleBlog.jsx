import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
  return (
    <>
        <Layout>
            <div class="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img class="w-full h-full object-cover" src="https://pbs.twimg.com/media/GvH1OHnWIAArkuf.jpg:large" alt="Product Image" />
                            </div>
                            <div class="flex -mx-2 mb-4">
                                <div class="w-1/2 px-2">
                                    <Link to='/blog/edit'>
                                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                                    </Link>
                                </div>
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Blog Title</h2>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                                    <span class="text-gray-600 dark:text-gray-300">Travelling</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Publish:</span>
                                    <span class="text-gray-600 dark:text-gray-300">2025 july</span>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    </>
  )
}

export default SingleBlog