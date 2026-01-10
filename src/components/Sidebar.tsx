import { useState } from 'preact/hooks';
import { ConversationList } from './ConversationList';

export function Sidebar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setSearchTerm(target.value);
    };

    return (
        <div id="dollars-sidebar">
            <div id="dollars-sidebar-search-container">
                <input
                    type="search"
                    id="dollars-sidebar-search-input"
                    placeholder="搜索对话..."
                    value={searchTerm}
                    onInput={handleSearchInput}
                />
            </div>
            <ConversationList searchTerm={searchTerm} />
        </div>
    );
}
