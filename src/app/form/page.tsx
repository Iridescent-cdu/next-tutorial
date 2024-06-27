// 'use client'

// import { ComponentProps, FormEvent, FormEventHandler } from "react"

// export default function FormPage() {
//   const handleSubmit: FormEventHandler<HTMLFormElement> | ComponentProps<'form'>['onChange'] = async (event: FormEvent<HTMLFormElement> | Parameters<NonNullable<ComponentProps<'form'>['onChange']>>[0]) => {
//     event.preventDefault()

//     const formData = new FormData(event.target)

//     const formValues = {
//       slug: formData.get('slug'),
//       instructions: formData.get('instructions'),
//       image: formData.get('image')
//     }

//     const imageBuffer = await formValues.image?.arrayBuffer()

//     console.log(imageBuffer)

//     fetch('https://www.example.com/submit', {
//       method: 'POST',
//       body: formData,
//     })
//   }

//   return <form action="https://www.example.com/submit" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
//     <label htmlFor="slug">图片名称:</label>
//     <input type="text" id="slug" name="slug" />
//     <label htmlFor="instructions">图片介绍:</label>
//     <input type="text" id="instructions" name="instructions" />
//     <label htmlFor="image">图片:</label>
//     <input type="file" id="image" name="image" accept="png,jpg" />
//     <button>提交</button>
//     <button type="submit">提交</button>
//     <button type="reset">重置</button>
//     <button type="button">按钮</button>
//   </form>
// }

// export default async function FormPage() {
//   const submitAction = async (formData) => {
//     'use server'
//     console.log(formData)
//   }


//   return <form action={submitAction}>
//     <label htmlFor="slug">图片名称:</label>
//     <input type="text" id="slug" name="slug" />
//     <label htmlFor="instructions">图片介绍:</label>
//     <input type="text" id="instructions" name="instructions" />
//     <label htmlFor="image">图片:</label>
//     <input type="file" id="image" name="image" accept="png,jpg" />
//     <button>提交</button>
//     <button type="submit">提交</button>
//     <button type="reset">重置</button>
//     <button type="button">按钮</button>
//   </form>
// }

'use client'

import { submitAction } from "@/lib/action";

export default function FormPage() {
  return <form action={submitAction}>
    <label htmlFor="slug">图片名称:</label>
    <input type="text" id="slug" name="slug" />
    <label htmlFor="instructions">图片介绍:</label>
    <input type="text" id="instructions" name="instructions" />
    <label htmlFor="image">图片:</label>
    <input type="file" id="image" name="image" accept="png,jpg" />
    <button>提交</button>
    <button type="submit">提交</button>
    <button type="reset">重置</button>
    <button type="button">按钮</button>
  </form>
}
