import type { Meta, StoryObj } from '@storybook/svelte'
import { MusicalNote as MusicalNoteSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: MusicalNoteSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<MusicalNoteSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const MusicalNote: Story = {}
