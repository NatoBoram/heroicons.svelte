import type { Meta, StoryObj } from '@storybook/svelte'
import { Newspaper as NewspaperSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: NewspaperSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<NewspaperSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Newspaper: Story = {}
