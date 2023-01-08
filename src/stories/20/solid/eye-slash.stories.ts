import type { Meta, StoryObj } from '@storybook/svelte'
import { EyeSlash as EyeSlashSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: EyeSlashSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<EyeSlashSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const EyeSlash: Story = {}
