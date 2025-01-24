<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusCircleSvelte from '../../../lib/16/solid/plus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PlusCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PlusCircle" />
