<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InformationCircleSvelte from '../../../lib/20/solid/information-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: InformationCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="InformationCircle" />
