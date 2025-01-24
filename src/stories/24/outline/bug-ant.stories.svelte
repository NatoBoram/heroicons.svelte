<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BugAntSvelte from '../../../lib/24/outline/bug-ant.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BugAntSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BugAnt" />
