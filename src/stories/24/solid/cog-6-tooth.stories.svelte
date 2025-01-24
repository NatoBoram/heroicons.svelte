<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog6ToothSvelte from '../../../lib/24/solid/cog-6-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Cog6ToothSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cog6Tooth" />
