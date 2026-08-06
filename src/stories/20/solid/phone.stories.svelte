<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhoneSvelte from '../../../lib/20/solid/phone.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PhoneSvelte,
		args: { class: '' },
	})
</script>

<Story name="Phone" />
