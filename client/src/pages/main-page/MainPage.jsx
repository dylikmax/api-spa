import Button from "../../components/Button";

export default function MainPage() {
    return <div className="grid justify-center justify-items-center gap-5">
        <h2 className="text-4xl font-bold">Main menu of API&SPA social network.</h2>
        <Button value="Users" path="/users"/>
        <Button value="Albums" path="/albums"/>
    </div>
}