import type { Meta, StoryObj } from '@storybook/svelte'
import NewspaperSvelte from '../../../lib/20/solid/newspaper.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: NewspaperSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<NewspaperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Newspaper: Story = {}
