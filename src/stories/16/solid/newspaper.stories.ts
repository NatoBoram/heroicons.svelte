import type { Meta, StoryObj } from '@storybook/svelte'
import NewspaperSvelte from '../../../lib/16/solid/newspaper.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: NewspaperSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<NewspaperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Newspaper: Story = {}
