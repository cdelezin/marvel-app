import CharactersList from "../components/CharactersList";
import NumberOfCharacters from "../components/NumberOfCharacters";
import { useLoaderData, useNavigate, useSearchParams, useLocation } from "react-router";
import { useEffect } from 'react';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the API (already sorted by loader according to URL)
    const { characters } = useLoaderData();

    // read/modify URL search params to control sorting
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const rawSort = searchParams.get('sort') || 'name';
    const rawOrder = searchParams.get('order') || 'asc';

    // normalize incoming values so the UI and loader get canonical values
    const normalizeOrder = (o) => {
        if (!o) return 'asc';
        const s = String(o).toLowerCase();
        if (s.includes('desc') || s.startsWith('d')) return 'desc';
        return 'asc';
    }

    const normalizeSort = (s) => {
        if (!s) return 'name';
        const t = String(s).toLowerCase();
        if (t.includes('modified') || t.includes('mod') || t.includes('date')) return 'modified';
        return 'name';
    }

    const sort = normalizeSort(rawSort);
    const order = normalizeOrder(rawOrder);

    const updateParams = (key, value, { replace = false } = {}) => {
        const params = new URLSearchParams(searchParams);
        if (value == null || value === '') {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        const qs = params.toString();
        const to = qs ? `${location.pathname}?${qs}` : location.pathname;
        navigate(to, { replace });
    }

    // If the URL contains non-canonical values (e.g. "asending"), normalize them and replace the URL once.
    useEffect(() => {
        const desiredOrder = normalizeOrder(rawOrder);
        const desiredSort = normalizeSort(rawSort);
        if (desiredOrder !== rawOrder || desiredSort !== rawSort) {
            const params = new URLSearchParams(searchParams);
            params.set('order', desiredOrder);
            params.set('sort', desiredSort);
            const qs = params.toString();
            const to = qs ? `${location.pathname}?${qs}` : location.pathname;
            navigate(to, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h2>Marvel Characters</h2>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <label>
                    Trier par:&nbsp;
                    <select value={sort} onChange={(e) => updateParams('sort', e.target.value)}>
                        <option value="name">Name</option>
                        <option value="modified">Modified</option>
                    </select>
                </label>

                <label>
                    Ordre:&nbsp;
                    <select value={order} onChange={(e) => updateParams('order', e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>

            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;