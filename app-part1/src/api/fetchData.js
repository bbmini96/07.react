
export function fetchNotice() {
    const result = fetch('http://localhost:8080/api/notice')
                    .then((response) => response.json());

    return result;
}
