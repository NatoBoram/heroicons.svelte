<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery50Svelte from '../../../lib/20/solid/battery-50.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Battery50Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Battery50" />
