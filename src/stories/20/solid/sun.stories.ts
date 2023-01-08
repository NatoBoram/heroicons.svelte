import type { Meta, StoryObj } from '@storybook/svelte'
import { Sun as SunSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: SunSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<SunSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Sun: Story = {}
