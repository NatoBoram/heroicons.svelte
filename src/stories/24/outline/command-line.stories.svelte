<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/24/outline/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CommandLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="CommandLine" />
