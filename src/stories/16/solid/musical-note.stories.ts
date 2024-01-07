import type { Meta, StoryObj } from '@storybook/svelte'
import MusicalNoteSvelte from '../../../lib/16/solid/musical-note.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: MusicalNoteSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<MusicalNoteSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MusicalNote: Story = {}
