const links = ['Home']

import Image from 'next/image'
export default function Header() {
  //return <div className="text-3xl">Header</div>
  return (
    <nav className="flex justify-between h-20 p-4">
      <Image
        src="/OFAAX40.jpg"
        alt="Description of your image"
        width={40}
        height={10}
      />

      <ul className="flex gap-6 list-none text-white">
        {links.map(link => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
