import Button from "../../components/Button"

export default function NotFoundPage() {
    return <div className="flex flex-col gap-3 text-center items-center">
        <h1 className="text-6xl font-black">Error 404</h1>
        <span>Page not found.</span>
        <Button path="/" value="Main page"></Button>
    </div>
}