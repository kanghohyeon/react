export default function BbsTr({ data }) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.author}</td>
            <td>{data.date}</td>
            <td>{data.views}</td>
        </tr>
    );
}